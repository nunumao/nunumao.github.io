const LanguageDetector = window.i18nextBrowserLanguageDetector;
$(document).ready(function () {
    function updateContent() {
        // 更新所有带有 data-i18n 属性的元素
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            $(this).text(i18next.t(key));
        });
    }

    i18next
        .use(LanguageDetector)
        .init({
            resources,
            fallbackLng: 'zh-CN',
            interpolation: {
                escapeValue: false
            }
        }).then(function(t) {
            updateContent();
        });

    // 语言切换处理
    $('.lang-switch').click(function() {
        const lang = $(this).data('lang');
        i18next.changeLanguage(lang).then(updateContent);
    });
});