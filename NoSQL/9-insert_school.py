#!/usr/bin/env python3
"""Module for inserting a document in a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in the collection and return its _id"""
    return mongo_collection.insert_one(kwargs).inserted_id
