(defproject setup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.async "0.4.474"]
                 [reagent "0.7.0"]
                 [re-com "0.9.0"]
                 [re-frame "0.10.5"]
                 ;;                 [org.clojure/spec.alpha "0.1.143"]
                 [cljs-ajax "0.7.3"]
                 [day8.re-frame/http-fx "0.1.5"]]
  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-externs "0.1.6"]
            [lein-shell "0.5.0"]
            [lein-figwheel "0.5.15" :exclusions [org.clojure/core.cache]]]
  :profiles
  {:dev
   {:dependencies [[figwheel "0.5.15"]
                   [com.cemerick/piggieback "0.2.2"]
                   [figwheel-sidecar "0.5.15"]
                   [day8.re-frame/re-frame-10x "0.3.0"]
                   [day8.re-frame/tracing "0.5.0"]]}}
  :source-paths ["src_tools"]
  :hooks [leiningen.cljsbuild]
  :aliases
  {"descjop-help" ["new" "descjop" "help"]
   "descjop-version" ["new" "descjop" "version"]
   "descjop-init" ["do"
                   ["shell" "npm" "install"]
                   ["shell" "grunt" "download-electron"]]
   "descjop-init-win" ["do"
                       ["shell" "cmd.exe" "/c" "npm" "install"]
                       ["shell" "cmd.exe" "/c" "grunt" "download-electron"]]
   "descjop-externs" ["do"
                      ["externs" "dev-main" "app/dev/js/externs.js"]
                      ["externs" "dev-front" "app/dev/js/externs_front.js"]
                      ["externs" "prod-main" "app/prod/js/externs.js"]
                      ["externs" "prod-front" "app/prod/js/externs_front.js"]]
   "descjop-externs-dev" ["do"
                          ["externs" "dev-main" "app/dev/js/externs.js"]
                          ["externs" "dev-front" "app/dev/js/externs_front.js"]]
   "descjop-externs-prod" ["do"
                           ["externs" "prod-main" "app/prod/js/externs.js"]
                           ["externs" "prod-front" "app/prod/js/externs_front.js"]]
   "descjop-figwheel" ["trampoline" "figwheel" "dev-front"]
   "descjop-once" ["do"
                   ["cljsbuild" "once" "dev-main"]
                   ["cljsbuild" "once" "dev-front"]
                   ["cljsbuild" "once" "prod-main"]
                   ["cljsbuild" "once" "prod-front"]]
   "descjop-once-dev" ["do"
                       ["cljsbuild" "once" "dev-main"]
                       ["cljsbuild" "once" "dev-front"]]
   "descjop-once-prod" ["do"
                        ["cljsbuild" "once" "prod-main"]
                        ["cljsbuild" "once" "prod-front"]]
   ;; electron packager for production
   "descjop-uberapp-osx" ["shell" "electron-packager" "./app/prod" "setup" "--platform=darwin" "--arch=x64" "--electron-version=1.6.6"]
   "descjop-uberapp-app-store" ["shell" "electron-packager" "./app/prod" "setup" "--platform=mas" "--arch=x64" "--electron-version=1.6.6"]
   "descjop-uberapp-linux" ["shell" "electron-packager" "./app/prod" "setup" "--platform=linux" "--arch=x64" "--electron-version=1.6.6"]
   "descjop-uberapp-win64" ["shell" "cmd.exe" "/c" "electron-packager" "./app/prod" "setup" "--platform=win32" "--arch=x64" "--electron-version=1.6.6"]
   "descjop-uberapp-win32" ["shell" "cmd.exe" "/c" "electron-packager" "./app/prod" "setup" "--platform=win32" "--arch=ia32" "--electron-version=1.6.6"]
   }

  :clean-targets [:target-path "tmp"
                  "app/dev/js/cljsbuild-main.js" "app/dev/js/front.js"
                  "app/prod/js/cljsbuild-main.js" "app/prod/js/front.js"
                  "app/dev/js/out_main" "app/dev/js/out_front"
                  "app/prod/js/out_main" "app/prod/js/out_front"]

  :cljsbuild
  {:builds
   {:dev-main
    {:source-paths ["src"]
     :incremental true
     :jar true
     :assert true
     :compiler {:output-to "app/dev/js/cljsbuild-main.js"
                :externs ["app/dev/js/externs.js"
                          "node_modules/closurecompiler-externs/path.js"
                          "node_modules/closurecompiler-externs/process.js"]
                :warnings true
                :elide-asserts true
                :target :nodejs
                :output-dir "app/dev/js/out_main"
                :optimizations :simple
                :pretty-print true
                :output-wrapper true }}
    :dev-front {:source-paths ["src_front" "src_front_profile/setup_front/dev"]
                :incremental true
                :jar true
                :assert true
                :compiler {:output-to "app/dev/js/front.js"
                           :externs ["app/dev/js/externs_front.js"]
                           :warnings true
                           :elide-asserts true
                           :optimizations :none
                           :output-dir "app/dev/js/out_front"
                           :pretty-print true
                           :output-wrapper true
                           :closure-defines {"re_frame.trace.trace_enabled_QMARK_" true
                                             "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                           :preloads [day8.re-frame-10x.preload]
                           :main "setup-front.init"
                           :asset-path "js/out_front"
                           }}
    :prod-main {:source-paths ["src"]
                :incremental true
                :jar true
                :assert true
                :compiler {:output-to "app/prod/js/cljsbuild-main.js"
                           :externs ["app/prod/js/externs.js"
                                     "node_modules/closurecompiler-externs/path.js"
                                     "node_modules/closurecompiler-externs/process.js"]
                           :warnings true
                           :elide-asserts true
                           :target :nodejs
                           :output-dir "app/prod/js/out_main"
                           :optimizations :simple
                           :pretty-print true
                           :output-wrapper true}}
    :prod-front {:source-paths ["src_front" "src_front_profile/setup_front/prod"]
                 :incremental true
                 :jar true
                 :assert true
                 :compiler {:output-to "app/prod/js/front.js"
                            :externs ["app/prod/js/externs_front.js"]
                            :warnings true
                            :elide-asserts true
                            :output-dir "app/prod/js/out_front"
                            :optimizations :simple
                            :pretty-print true
                            :output-wrapper true}}}}
  :figwheel {:http-server-root "public"
             :ring-handler figwheel-middleware/app
             :server-port 3449})
