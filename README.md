This is a simple example of how to include an IPython 3.0 notebook kernel widget into a static site.  

## Install the submodule

The repo has the following submodule:

```
git submodule add https://github.com/ipython/ipython-components.git js/ipython/components
```

When you clone the repo, you need to do the following steps to pull down the submodule:

```
$ git submodule init
$ git submodule update
```

## Start a kernel server

Next, you need to start an instance of the [kernel-service](https://github.com/rgbkrk/kernels-service).  The simplest way to do this is via Docker:

```
$ docker run -it -p 8888:8888 odewahn/kernels-service
```

Assuming you're running `boot2docker`, you can see the kernel ID by doing this:

```
$ curl http://192.168.59.103:8888/api/kernels
[{"id": "ffec3251-db76-4140-a019-273abc6fd4f3", "name": "python3"}]
```

On linux, do this:

```
$ curl http://127.0.0.1/api/kernels
[{"id": "ffec3251-db76-4140-a019-273abc6fd4f3", "name": "python3"}]
```


## Run a static server locally

Then run a static page server on localhost, like this:

```
python -m SimpleHTTPServer
```

Then try to get the remote kernel to execute stuff you type into the box...


## To Do


* Add restart kernel button, and a "halt" button
* Map the JS module to the new container (i.e., replace the hardcoded value in var ws_url = "ws://192.168.59.103:8000"; )
* Add a "Run" button to the codemirror cells
* Make it work with multiple samples, just like the other plugins
* Add a  "Powered by Jupyter" logo in the header or footer

