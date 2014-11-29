This is a simple example of how to include an IPython notebook code cell into a static site.  It requires a [kernel server](https://github.com/oreillymedia/jupyter-kernel) to process the code.  The ultimate goal is to make a plugin like this:

<img src="images/jupyter-plugin.png"/>

## Start the notebook kernel server in Docker

Note that you'll need to build the 

```
docker run -p 8888:8888 oreillymedia/pyxie-kernel ./go.sh
```


## Set the location of the kernel

Once the kernel starts, you'll need to specify where it is by changing a hardcoded value:

```javascript
var ws_url = "ws://192.168.59.103:8888";

//var ws_url = "ws://jupyter-kernel.odewahn.com:8888";
```

The goal is to eventually have a kernel started on a remote server via [tmpnb](https://github.com/jupyter/tmpnb), but for now it's pretty manual.

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

