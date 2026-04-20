#!/usr/bin/env python3
"""Module for index_range helper function"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return start and end indexes for the given page and page_size"""
    start = (page - 1) * page_size
    return (start, start + page_size)
