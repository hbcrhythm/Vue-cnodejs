<template>
	<section id="serverLists" class="server-lists" :class="{'show':showMenu}">
		<div class="panel panel-info m-t-m-70-50">
		  <div class="panel-heading">SUMMARY</div>
		  	<ul class="list-group">
			    <li class="list-group-item">Cras justo odio</li>
			    <li class="list-group-item">Dapibus ac facilisis in</li>
			    <li class="list-group-item">Morbi leo risus</li>
			    <li class="list-group-item">Porta ac consectetur ac</li>
			    <li class="list-group-item">Vestibulum at eros</li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default {
	    props: ['showMenu']
	};
</script>
<style lang="scss">
	 .server-lists {
        position: fixed;
        top: -300px;
        bottom: 0px;
        left: 500px;
        width: 600px;
        height: 0px;
        background-color: #fff111;
        color: #313131;
        transition: all .3s ease;
        z-index: 99;
        &.show {
            transform: translateY(300px);
        }
    }

    /*侧边栏列表*/
    
    .list-ul {
        margin: 0 24px;
        border-top: 1px solid #d4d4d4;
        overflow: hidden;
        padding-top: 9%;
        .item {
            display: block;
            font-size: 14px;
            font-weight: 200;
            padding: 9% 0;
            text-align: left;
            text-indent: 1px;
            line-height: 15px;
            color: #313131;
            font-weight: 700;
            &:last-child {
                margin-bottom: 50px;
            }
            &:before {
                color: #2c3e50;
            }
        }
        .line {
            border-top: 1px solid #d4d4d4;
        }
    }
</style>