(ns setup-front.events
    (:require [re-frame.core :as rf]

            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [re-frame.core :refer [reg-event-fx]]
            [setup-front.db :as db]
            [setup-front.config :as config]
            [cognitect.transit :as transit]))

(rf/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(rf/reg-event-db
  :process-response
  (fn
    [db [_ response]]           ;; destructure the response from the event vector
    (let [reader (transit/reader :json)]
      (-> db
                (assoc :loading? false) ;; take away that "Loading ..." UI
                (assoc :projects (transit/read reader response)))))) ;; fairly lame processing

(rf/reg-event-db
  :bad-response
  (fn
    [db [_ response]]
    (-> db
        (assoc :loading? false)
        (assoc :error "Project load failed")
        )))

(rf/reg-event-fx        ;; <-- note the `-fx` extension
  :request-it        ;; <-- the event id
  (fn                ;; <-- the handler function
    [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db

    ;; we return a map of (side) effects
    {:http-xhrio {:method          :get
                  :cross-origin    true
                  :uri             (str config/api-root "/projects")
                  :format          (ajax/json-request-format)
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success      [:process-response]
                  :on-failure      [:bad-response]}
     :db  (assoc db :loading? true)}))
