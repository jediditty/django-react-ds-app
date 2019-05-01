from elasticsearch_dsl.connections import connections
from elasticsearch_dsl import DocType, Text, Date, Integer, Float
from elasticsearch.helpers import bulk
from elasticsearch import Elasticsearch
from . import models


connections.create_connection(hosts=['localhost'])

class DataToBeIndex(DocType):
    field_1_int = Integer()
    field_2_char = Text()
    field_3_float = Float()
    field_4_float = Float()
    field_5_char = Text()
    field_6_int = Integer()

    class Index:
        name = 'datatobe-index'

def bulk_indexing():
    DataToBetIndex.init()
    es = Elasticsearch()
    bulk(client=es, actions=(b.indexing() for b in models.DataToBetIndex.objects.all().iterator()))