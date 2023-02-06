from flask import *

app = Flask(__name__)


@app.route("/")
def index():



@app.route("/network_scanning")
def network_scanning():
    return render_template("network_scanning.html")


if __name__ == "__main__":
    app.run(debug=True)
