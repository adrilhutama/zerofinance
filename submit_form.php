<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Mengirim data ke Discord Webhook
  $discordWebhookUrl = "https://discord.com/api/webhooks/1110622573655503019/jyqSr20W02Jua9KjsduCHIKmtRACsCf3t2blwqt0GkKKILdD9GqWtAlZ_DA7sOxyKhIy"; // Ganti dengan URL Webhook Discord Anda

  $data = array(
    "content" => "New Form Submission:\n\n" .
      "Name: " . $name . "\n" .
      "Email: " . $email . "\n" .
      "Message: " . $message
  );

  $options = array(
    "http" => array(
      "header"  => "Content-type: application/json",
      "method"  => "POST",
      "content" => json_encode($data)
    )
  );
  $context  = stream_context_create($options);
  $result = file_get_contents($discordWebhookUrl, false, $context);

  if ($result === FALSE) {
    // Jika gagal mengirim, Anda dapat menambahkan tindakan penanganan kesalahan di sini
  }

  // Redirect ke halaman "thank you" setelah pengiriman formulir berhasil
  header("Location: thank_you.php");
  exit();
}
?>
