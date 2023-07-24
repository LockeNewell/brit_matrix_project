from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import RecommendationModel

def hello_world(request):
    return HttpResponse("Hello, World!")

def bilingual_reading_view(request):
    return render(request, 'bilingual_reading.html')

def convertFluency(value):
    if value == 'fluent_accurate':
        return 'FA'
    elif value == 'accurate':
        return 'A'
    elif value == 'not_accurate':
        return 'NA'
    else:
        raise NameError("no matching fluency")
    
def convertMastery(value):
    if value == 'advanced':
        return 'Int/Adv'
    elif value == 'intermediate':
        return 'Int/Adv'
    elif value == 'beginner':
        return 'Beg'
    else:
        raise NameError("no matching fluency")

def isNotAccurate(languageSet):
    return languageSet[0]=='not_accurate' and languageSet[1]=='not_accurate' 

def createCode(reading_connected_text,reading_words,decoding,language_proficiency):
    if isNotAccurate(reading_connected_text):
        if isNotAccurate(reading_words):
            return 'Ph'+convertFluency(decoding[1])+convertFluency(decoding[0])+convertMastery(language_proficiency[1])+convertMastery(language_proficiency[0])
        else:
            return 'ORFWL'+convertFluency(reading_words[1])+convertFluency(reading_words[0])+convertMastery(language_proficiency[1])+convertMastery(language_proficiency[0])
    else:
        return 'ORFCT'+convertFluency(reading_connected_text[1])+convertFluency(reading_connected_text[0])+convertMastery(language_proficiency[1])+convertMastery(language_proficiency[0])


def createPACode(phonemic_awareness,language_proficiency):
    return 'PA'+convertFluency(phonemic_awareness[1])+convertFluency(phonemic_awareness[0])+convertMastery(language_proficiency[1])+convertMastery(language_proficiency[0])

def isSet(languageSet):
    return languageSet[0]!='default' and languageSet[1]!='default' 

def formResponse(request):

    if request.method == 'POST':
        try:
            # Create a code from the data
            code = createCode(
                [request.POST.get('reading_connected_text_L1'), request.POST.get('reading_connected_text_L2')],
                [request.POST.get('reading_words_L1'), request.POST.get('reading_words_L2')],
                [request.POST.get('decoding_L1'), request.POST.get('decoding_L2')],
                [request.POST.get('language_proficiency_L1'),request.POST.get('language_proficiency_L2')]
            )
            if isSet([request.POST.get('phonemic_awareness_L1'),request.POST.get('phonemic_awareness_L2')]):
                pa_code = createPACode(
                    [request.POST.get('phonemic_awareness_L1'),request.POST.get('phonemic_awareness_L2')],
                    [request.POST.get('language_proficiency_L1'),request.POST.get('language_proficiency_L2')]
                )
            
            # Query the database
            try:
                reading_intervention_recommendation = RecommendationModel.objects.get(code=code).recommendation
                if isSet([request.POST.get('phonemic_awareness_L1'),request.POST.get('phonemic_awareness_L2')]):
                    phonemic_awareness_intervention_recommendation = RecommendationModel.objects.get(code=pa_code).recommendation
                else:
                    phonemic_awareness_intervention_recommendation = 'Phonemic Awareness results were not entered'
            except ObjectDoesNotExist:
                return HttpResponseBadRequest("Query did not match any object in the database")
            
            response_data = {
                'reading_intervention_recommendation' :  reading_intervention_recommendation,
                'phonemic_awareness_intervention_recommendation' :  phonemic_awareness_intervention_recommendation,
            }
            return JsonResponse(response_data)
        except KeyError:
            return HttpResponseBadRequest("Invalid POST data")
    else:
        return HttpResponseBadRequest("Invalid HTTP method")
