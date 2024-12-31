# define api routes

from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User, Note
from . import db

api = Blueprint('api', __name__)

# User registration
@api.route('/register', methods=['POST'])
def register():
    data = request.get_json() # convert request data to json
    hashed_password = generate_password_hash(data['password']) # hash password for db
    new_user = User(username=data['username'], password=hashed_password) # create new user with user model
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": f"{new_user.username} registered!"}), 201

# User login
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"message": "Invalid username or password!"}), 401

    # Generate JWT
    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token": access_token}), 200

# Get all notes for the user
@api.route('/notes', methods=['GET'])
@jwt_required() # protected
def get_notes():
    user_id = get_jwt_identity()  # Get the ID of the logged-in user
    notes = Note.query.filter_by(user_id=user_id).all() # find all notes for the user in db
    return jsonify([
        {"id": note.id, "title": note.title, "content": note.content, "created_at": note.created_at} 
        for note in notes
    ])

# Create a note for a specific user
@api.route('/notes', methods=['POST'])
def create_note():
    data = request.get_json() # exctract notes data
    new_note = Note(title=data['title'], content=data['content'], user_id=data['user_id']) # create new note from model class
    db.session.add(new_note)
    db.session.commit()
    return jsonify({"message": "Note created!", "id": new_note.id}), 201
