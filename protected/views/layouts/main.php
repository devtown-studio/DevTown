<!DOCTYPE html>
<html>
<head>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/general.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/main.css">
    <link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/style/theme.css">
    <script src="<?php echo Yii::app()->request->baseUrl; ?>/js/jquery.js"></script>
</head>

<body>
    <?php echo $content; ?>

<!--    <script src="--><?php //echo Yii::app()->request->baseUrl; ?><!--/js/jquerycolor.js"></script>-->
    <script src="<?php echo Yii::app()->request->baseUrl;?>/js/main.js"></script>


</body>
</html>