# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import include, url
import views as api

urlpatterns = [
    url(r'^$', api.TodoViewSet.as_view(
        actions={'get': 'list_todo',
                 'post': 'create_todo'
                 }),
        name='ListCreateTodo'),
]
