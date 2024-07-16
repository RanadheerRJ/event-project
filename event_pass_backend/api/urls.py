from django.urls import path
from .views import EventListView, ContactFormSubmissionCreateView

urlpatterns = [
    path('events/', EventListView.as_view(), name='event-list'),
    path('contact/', ContactFormSubmissionCreateView.as_view(), name='contact-form-submission'),
]
