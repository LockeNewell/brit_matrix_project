from django.db import models

class RecommendationModel(models.Model):
    code = models.CharField(max_length=20)
    recommendation = models.TextField()

    def __str__(self):
        return self.code