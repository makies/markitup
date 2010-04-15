<?php
/**
 * MarkitupHook Helper
 *
 * PHP version 5
 *
 * @category Helper
 * @package  Croogo
 * @version  1.0
 * @author   Fahad Ibnay Heylaal <contact@fahad19.com>
 * @license  http://www.opensource.org/licenses/mit-license.php The MIT License
 * @link     http://www.croogo.org
 */
class MarkitupHookHelper extends AppHelper {
/**
 * Other helpers used by this helper
 *
 * @var array
 * @access public
 */
    var $helpers = array(
        'Html',
        'Js',
    );
/**
 * Actions
 *
 * Format: ControllerName/action_name => settings
 *
 * @var array
 */
    var $actions = array(
        'Nodes/admin_add' => array(
            'elements' => 'NodeBody',
        ),
        'Nodes/admin_edit' => array(
            'elements' => 'NodeBody',
        ),
        'Translate/admin_edit' => array(
            'elements' => 'NodeBody',
        ),
    );
/**
 * Default settings for tinymce
 *
 * @var array
 * @access public
 */
    var $settings = array();

    function fileBrowserCallBack() {
        $output = "function fileBrowserCallBack(field_name, url, type, win) {
            browserField = field_name;
            browserWin = win;
            window.open('".$this->Html->url(array('controller' => 'attachments', 'action' => 'browse'))."', 'browserWindow', 'modal,width=960,height=700,scrollbars=yes');
        }";

        return $output;
    }

    function selectURL() {
        $output = "function selectURL(url) {
            if (url == '') return false;

            url = '".Router::url('/uploads/', true)."' + url;

            field = window.top.opener.browserWin.document.forms[0].elements[window.top.opener.browserField];
            field.value = url;
            if (field.onchange != null) field.onchange();
            window.top.close();
            window.top.opener.browserWin.focus();
        }";
        
        return $output;
    }

    function getSettings($settings = array()) {
        $_settings = $this->settings;
        $action = Inflector::camelize($this->params['controller']).'/'.$this->params['action'];
        if (isset($this->actions[$action])) {
            $_settings = Set::merge($_settings, $this->actions[$action]);
        }
        $settings = Set::merge($_settings, $settings);
        return $settings;
    }

    function beforeRender() {
        if (Configure::read('Writing.wysiwyg')) {
			echo $this->Html->css('/markitup/css/markitup/skins/simple/style');
			echo $this->Html->css('/markitup/css/markitup/sets/html/style');
			echo $this->Html->css('/markitup/css/jqModal');
			echo $this->Html->script('/markitup/js/jqModal', array('inline' => false));
			echo $this->Html->script('/markitup/js/markitup/jquery.markitup', array('inline' => false));
			echo $this->Html->script('/markitup/js/markitup/sets/html/set', array('inline' => false));
            echo $this->Html->scriptBlock($this->fileBrowserCallBack(), array('inline' => false));
            echo $this->Html->scriptBlock('   $(document).ready(function() {
      $("#NodeBody").markItUp(mySettings);
   });
', array('inline' => false));
        }

        if ($this->params['controller'] == 'attachments' && $this->params['action'] == 'admin_browse') {
            $this->Html->scriptBlock($this->selectURL(), array('inline' => false));
        }
    }
}

?>