(ns setup-front.init
    (:require [setup-front.core :as core]
              [setup-front.conf :as conf]))

(enable-console-print!)

(defn start-descjop! []
  (core/init! conf/setting))

(start-descjop!)
