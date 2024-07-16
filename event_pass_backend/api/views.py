from rest_framework import generics
from .models import Event, ContactFormSubmission
from .serializers import EventSerializer, ContactFormSubmissionSerializer

class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ContactFormSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSubmissionSerializer
