from django.shortcuts import render
from django.views.decorators.http import require_POST
from django.http import JsonResponse
import json


# Create your views here.
def landing(request):
    return render(request, 'home.html')


def Projects(request):
    return render(request, 'projects.html')

#API ROUTES
@require_POST

def ContactForm(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")
        timeSent = data.get("timeSent")

        #do the save thingy here

        return JsonResponse({"status":"ok", "message": "Thanks for your message"})
    return JsonResponse({"error"})