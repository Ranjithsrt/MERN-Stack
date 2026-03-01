from django.shortcuts import render,redirect
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the blog index.")

def detail(request, post_id):
    return HttpResponse(f"Hello world. You're at the blog detail. {post_id}" )

def old_url_redirect(request):
    return redirect("blog:new_url")  # <--- add "blog:" before "new_url"


def new_url_redirect(request):
    return HttpResponse("Hello world. You're at the blog new url redirect.")