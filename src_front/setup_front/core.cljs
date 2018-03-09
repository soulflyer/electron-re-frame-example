(ns setup-front.core
  (:require [reagent.core :as reagent :refer [atom]]
            [anh-front.views :as views]))

(defonce app-state (atom {:message "Hello Minimum app world!"}))

(defn mount-root [setting]
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app"))
  ;; (let [app (. js/document (getElementById "app"))]
  ;;   (set! (.-innerHTML app) (:my-env setting)))
  )

(defn init! [setting]
  (mount-root setting))
