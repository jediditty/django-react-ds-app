from django.apps import AppConfig


class ElasticApiConfig(AppConfig):
    name = 'elastic_api'

    def ready(self):
        import elastic_api.signals
