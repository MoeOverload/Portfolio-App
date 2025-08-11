from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=255)
    shortDescription = models.TextField()
    longDescription = models.TextField()
    dateAdded = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    dateSent = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"
