# -*- coding: utf-8 -*-

from __future__ import unicode_literals

import uuid
from django.db import models
from django.utils.translation import ugettext_lazy as _

class Todo(models.Model):
    id = models.CharField(max_length=255,
                          primary_key=True,
                          default=uuid.uuid4)
    title = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        app_label = 'api'
        db_table = "api_todo"
        verbose_name = _("todo")