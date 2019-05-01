from .models import DataToBe
from rest_framework import viewsets
from .serializers import DataToBeSerializer


class DataToBeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows data to be to be viewed or edited.
    """
    queryset = DataToBe.objects.all()
    serializer_class = DataToBeSerializer
