(ns setup-front.core
  (:require  [reagent.core :as reagent :refer [atom]]
             [re-frame.core :as re-frame]
             [setup-front.events :as events]
             [setup-front.views :as views]
             [setup-front.config :as config]
;;             [re-frisk-remote.core :refer [enable-re-frisk-remote!]]
             ))

(defonce app-state (atom {:message "Hello Min app world!"}))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root [setting]
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn init! [setting]
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root setting))
