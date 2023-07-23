from django.test import TestCase
from django.urls import reverse

class HelloWorldViewTests(TestCase):
    def test_hello_world_view(self):
        url = reverse('hello_world')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Hello, World!")