# Generated by Django 5.1.2 on 2024-10-30 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomapp', '0002_rename_products_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='num_review',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
