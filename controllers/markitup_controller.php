<?php
class MarkitupController extends MarkitupAppController {
	public $components = null;
	public $helpers = array('Markitup.Markitup');
	public $layout = 'ajax';
	public $uses = null;
	public function preview($parser = '') {
		$content = $this->data;
		$this->set(compact('content', 'parser'));
	}
}
    function preview($parser = 'markdown') {
        $this->layout = 'preview';
        $this->set('parser', $parser);        
        $this->set('content', $this->data);
        $this->autoRender = true;
    }
?>