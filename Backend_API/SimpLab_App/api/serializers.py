from rest_framework import serializers
from SimpLab_App.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['Username', 'email', 'courses_enrolled', 'profile_picture']

class SignUpSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField()
    class Meta:
        model = User
        fields = ['Username', 'email','password','password2']
        extra_kwargs ={ 'password' : {'write_only' : True}}

    def save(self):
        user = User(
            email = self.validated_data['email'],
            Username = self.validated_data['Username']
        )

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password!= password2:
            raise serializers.ValidationError({'password':'Passwords must match.'})
        user.save()
        return user