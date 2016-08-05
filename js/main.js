$(function () {
    var currentProjects = [{
            name: 'project1',
            ro: {
                title: 'Proiect1',
                target: '2000 Lei',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            },
            en: {
                title: 'Project1',
                target: '500$',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            }
        },{
            name: 'project2',
            ro: {
                title: 'Proiect2',
                target: '4500 Lei',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            },
            en: {
                title: 'Project2',
                target: '1000$',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            }
        },{
            name: 'project3',
            ro: {
                title: 'Proiect3',
                target: '1000 Lei',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            },
            en: {
                title: 'Project3',
                target: '200$',
                description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.'
            }
        }];
    
    //Single project template
    
    var $projectTplEn = $("<div class='language-dependency' data-language='en'><div class='featurette'>"+
            "<img class='featurette-image img-circle img-responsive' src='http://placehold.it/500x500'>"+
            "<h2 class='featurette-heading'>"+
            '<span class="text-muted"></span>'+
            '</h2>'+
            '<p class="lead"></div>'+
            '<hr class="featurette-divider"></div>');
    var $projectTplRo = $("<div class='language-dependency' data-language='ro'><div class='featurette' >"+
            "<img class='featurette-image img-circle img-responsive' src='http://placehold.it/500x500'>"+
            "<h2 class='featurette-heading'>"+
            '<span class="text-muted"></span>'+
            '</h2>'+
            '<p class="lead"></div>'+
            '<hr class="featurette-divider"></div>');
    var $projectContainer = $('#container');
    
    for (i=0;i<currentProjects.length;i++){
        var $elementEn = $projectTplEn.clone();
        var $elementRo = $projectTplRo.clone();
        if (i%2){
            $($elementEn).find("img").addClass('pull-left');
            $($elementRo).find("img").addClass('pull-left');
        } else {
            $($elementEn).find("img").addClass('pull-right');
            $($elementRo).find("img").addClass('pull-right');
        }
        //En append
        $($elementEn).find("h2").text(currentProjects[i].en.title);
        $($elementEn).find("span").text('Target:',currentProjects[i].en.target);
        $($elementEn).find("p").text(currentProjects[i].en.description);
        $projectContainer.append($elementEn);
        //Ro append
        $($elementRo).find("h2").text(currentProjects[i].ro.title);
        $($elementRo).find("span").text('Target:',currentProjects[i].ro.target);
        $($elementRo).find("p").text(currentProjects[i].ro.description);
        $projectContainer.append($elementRo);
    }
    
    $('.set-language').click(function (e) {
        var newLanguage = $(this).data('newLanguage');
        setLanguage(newLanguage);
    });
    $('[data-manage="content"]').click(function (e) {
	    hideContent(false);
	    var c = $(this).data('contentSelector');
	    var $c = $(c);
	   /* if ((c == '#video' || c == '#audio') && !$c.hasClass('iframe-src-resolved')) {
	        var $iframes = $(c + ' iframe');
	        $.each($iframes, function (idx, iframe) {
	            $(iframe).attr('src', $(iframe).data('src'));
	        })
	        $c.addClass('iframe-src-resolved');
	    } */
	    $c.fadeIn('slow');
	});
        setLanguage('en');
});
// End of document Ready
function setLanguage(toLanguage) {
    $('.language-dependency').hide();
    $('.language-dependency[data-language="' + toLanguage + '"]').fadeIn();
};