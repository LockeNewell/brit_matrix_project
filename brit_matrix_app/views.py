from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def hello_world(request):
    return HttpResponse("Hello, World!")

def bilingual_reading_view(request):
    return render(request, 'bilingual_reading.html')

def formResponse(request):

    if request.method == 'POST':

        reading_connected_text_L1 = request.POST.get('reading_connected_text_L1')
        reading_connected_text_L2 = request.POST.get('reading_connected_text_L2')
        reading_words_L1 = request.POST.get('reading_words_L1')
        reading_words_L2 = request.POST.get('reading_words_L2')
        decoding_L1 = request.POST.get('decoding_L1')
        decoding_L2 = request.POST.get('decoding_L2')
        phonemic_awareness_L1 = request.POST.get('phonemic_awareness_L1')
        phonemic_awareness_L2 = request.POST.get('phonemic_awareness_L2')
        language_proficiency_L1 = request.POST.get('language_proficiency_L1')
        language_proficiency_L2 = request.POST.get('language_proficiency_L2')

        response_data = {
            'reading_connected_text_L1' :  reading_connected_text_L1,
            'reading_connected_text_L2' :  reading_connected_text_L2,
            'reading_words_L1' :  reading_words_L1,
            'reading_words_L2' :  reading_words_L2,
            'decoding_L1' :  decoding_L1,
            'decoding_L2' :  decoding_L2,
            'phonemic_awareness_L1' :  phonemic_awareness_L1,
            'phonemic_awareness_L2' :  phonemic_awareness_L2,
            'language_proficiency_L1' :  language_proficiency_L1,
            'language_proficiency_L2' :  language_proficiency_L2
        }
        return JsonResponse(response_data)