<?
require 'PushBullet.class.php';
try {
$p = new PushBullet('o.kHJHbBgZ9INKRwb38Z5vT1nx5BX3kozN');
$p->pushNote(NULL, 'Test Push Title', 'Someone Opend the Page');

} catch (PushBulletException $e) {
  // Exception handling
  die($e->getMessage());
}
?>
