from django.http import HttpResponse
from django.shortcuts import render

def hello_world(request):
    return HttpResponse("Hello, World!")
def bilingual_reading_view(request):
    return render(request, 'bilingual_reading.html')