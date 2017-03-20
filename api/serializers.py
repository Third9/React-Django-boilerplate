# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers

from models import Todo


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo

        fields = ('id',
                  'title',
                  'description',)
