from rest_framework.permissions import BasePermission, SAFE_METHODS

class PermissionsGetNotPost(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS or request.user.is_authenticated:
            return True
        return False