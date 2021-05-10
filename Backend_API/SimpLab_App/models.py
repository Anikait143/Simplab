from django.db import models

class User(models.Model):
    Username = models.CharField(max_length=50)
    password = models.CharField(max_length=16)
    email = models.EmailField(max_length=254)
    courses_enrolled = models.TextField()
    profile_picture = models.ImageField()

    def _str_(self):
        return self.Username

class Course(models.Model):
    Course_name = models.CharField(max_length=50)
    enrolled_users = models.TextField()
    creator = models.CharField(max_length=50)
    assignments=models.TextField()

    def _str_(self):
        return self.Course_name


class Chat(models.Model):
    Sender = models.CharField(max_length=50)
    message = models.TextField()
    date = models.DateField(auto_now=False, auto_now_add=False)
    time= models.TimeField(auto_now=False, auto_now_add=False)
    is_file = models.BooleanField(default= False)
    File = models.FileField()
