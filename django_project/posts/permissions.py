from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # if(request.user.IsAuthenticated):
        #     return True
        # return False
        return True

    def has_object_permission(self, request, view, obj):
        if(request.METHOD in permission.SAFE_METHODS):
            return True
        return request.user == obj.author