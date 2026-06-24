<?php

declare(strict_types=1);

$indexFile = __DIR__ . '/index.html';

if (!is_file($indexFile)) {
    http_response_code(500);
    exit('TrustForce site build is missing.');
}

header('Content-Type: text/html; charset=UTF-8');
readfile($indexFile);
