"""Top-level package for ComfyUI-DrawThings-gRPC."""

__all__ = [
    "NODE_CLASS_MAPPINGS",
    "NODE_DISPLAY_NAME_MAPPINGS",
    "WEB_DIRECTORY",
]

__author__ = """Jokimbe"""
__version__ = "0.0.1"

from .nodes import NODE_CLASS_MAPPINGS
from .nodes import NODE_DISPLAY_NAME_MAPPINGS

WEB_DIRECTORY = "./web"
