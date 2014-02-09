<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/general.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/main.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/theme.css">
    <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.js"></script>
</head>

<body>

    <div id="c_top">
        <div id="c_navTop">
            <ul class="list_navTop">
                <li>
                    Главная
                    <div class="undrelineNavTop_red"></div>
                </li>
                <li>
                    О компании
                    <div class="undrelineNavTop_green"></div>
                </li>
                <li>
                    Услуги
                    <div class="undrelineNavTop_blue"></div>
                </li>
                <li>
                    Портфолио
                    <div class="undrelineNavTop_yellow"></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="marginTop"></div>
    <?php echo $content; ?>



    <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquerycolor.js"></script>
    <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/main.js"></script>


</body>
</html>