from django.test import TestCase


from .models import Post
from django.contrib.auth import get_user_model
# Create your tests here.


class BlogTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(username = "testuser1", email="testuser1@test.com", password="hellopass123")
        cls.post = Post.objects.create(author = cls.user, title = "some title", body = "this is a test blog")


    def test_post_model(self):
        self.assertEqual(self.post.author.username, "testuser1")
        self.assertEqual(self.post.title, "some title")
        self.assertEqual(self.post.body, "this is a test blog")
        self.assertEqual(str(self.post), "some title")
