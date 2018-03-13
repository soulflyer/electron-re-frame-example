(ns setup-front.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  ::name
  (fn [db]
    (:name db)))

(rf/reg-sub
  ::project-string
  (fn [db _]
    (:project-string db)))

(rf/reg-sub
  ::projects
  (fn [db _]
    (:projects db)))
