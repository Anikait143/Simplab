from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (UserSerializer, SignUpSerializer)


@api_view(['POST'])
def signup(request):
    serializer = SignUpSerializer(data = request.data)
    data={}
    if serializer.is_valid():
        serializer.save()
        data['response']:"successfully registered"
    else:
        data = serializer.errors
    return Response(data)

