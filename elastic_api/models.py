from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from .search import DataToBeIndex


class DataToBe(models.Model):
    field_1_int = models.IntegerField()
    field_2_char = models.CharField(max_length=50)
    field_3_float = models.FloatField()
    field_4_float = models.FloatField()
    field_5_char = models.CharField(max_length=50)
    field_6_int = models.IntegerField()

    def indexing(self):
        obj = DataToBeIndex(
            meta={'id': self.id},
            field_1_int=self.field_1_int,
            field_2_char=self.field_2_char,
            field_3_float=self.field_3_float,
            field_4_float=self.field_4_float,
            field_5_char=self.field_5_char,
            field_6_int=self.field_6_int,
        )
        obj.save()
        return obj.to_dict(include_meta=True)