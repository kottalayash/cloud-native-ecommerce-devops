# This file intentionally keeps the infrastructure definition minimal.
# For a production implementation, use the official terraform-aws-modules/vpc
# and terraform-aws-modules/eks modules after reviewing their current versions.

resource "aws_vpc" "ecommerce" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "${var.cluster_name}-vpc"
  }
}

output "vpc_id" {
  value = aws_vpc.ecommerce.id
}
