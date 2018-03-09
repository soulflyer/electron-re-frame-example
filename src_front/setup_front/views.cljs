(ns anh-front.views
  (:require [re-frame.core :as rf]
            [re-com.core :as re-com]
;;            [anh-front.subs :as subs]
            ))

(defn title []
  [:h1 (str "Hello frae me ")])



(defn main-panel []
  [re-com/v-box
   :height "100%"
   :children [[title] ]])
