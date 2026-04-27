#!/usr/bin/env python3
"""Module for listing all documents in a MongoDB collection"""


def list_all(mongo_collection):
    """Return a list of all documents in the collection"""
    return list(mongo_collection.find())
