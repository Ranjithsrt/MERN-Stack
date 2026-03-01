from django.shortcuts import render


# Create your views here.

# session
def cookies_count_view(request):
    count = request.session.get('count',0)
    totalCount = int(count) + 1
    request.session['count'] = totalCount
   # print(request.session.get_expiry_date())
    return render(request,'cookiseApp/cookies.html',{'count':totalCount})



# cookies
# def cookies_count_view(request):
#     count = request.COOKIES.get('count',0)
#     totalCount = int(count) + 1
#     response = render(request,'cookiseApp/cookies.html',{'count':totalCount})
#     response.set_cookie('count',totalCount)
#     return response


# key , value pair
# get('key')
# get('key' ,5)