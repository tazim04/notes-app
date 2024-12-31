# initialize project

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    CORS(app)

    # app configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
    app.config['SECRET_KEY'] = 'your-secret-key'
    app.config['JWT_SECRET_KEY'] = 'your-jwt-secret-key' # for jwt signing

    # Initialize db and jwt
    db.init_app(app)
    jwt.init_app(app)

    # import and register blueprints
    from .routes import api
    app.register_blueprint(api, url_prefix='/api')

    # create db tables
    with app.app_context():
        db.create_all()

    return app
