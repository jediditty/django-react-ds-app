from django.urls import include, path
from rest_framework import routers
from elastic_api import views

router = routers.DefaultRouter()
router.register(r'datatobe', views.DataToBeViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]