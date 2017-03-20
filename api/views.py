# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets

from models import Todo
from serializers import TodoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    lookup_field = 'id'

    def list_todo(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def retrieve_todo(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def create_todo(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)