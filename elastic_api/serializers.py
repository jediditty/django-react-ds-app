from .models import DataToBe
from rest_framework import serializers


class DataToBeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DataToBe
        fields = '__all__'